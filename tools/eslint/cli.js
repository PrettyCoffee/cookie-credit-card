#!/usr/bin/env node

const { ESLint } = require("eslint")

const { existsSync } = require("fs")
const { cwd } = require("process")

const configs = {
  base: require("./configs/base"),
  preact: require("./configs/preact"),
}

const extensions = [".js", ".ts", ".tsx", ".jsx", ".json"]

const resolvePath = relativePath => {
  const path = `${cwd()}/${relativePath}`
  if (!existsSync(path)) throw `ERROR: ${relativePath} not available`
  return path
}

const getOptions = () => {
  const args = process.argv
  const options = {
    include: [],
    baseConfig: configs.base,
    fix: false,
  }

  let i = 1
  while (i++ && args[i]) {
    switch (args[i]) {
      case "--config":
        i++
        const config = configs[args[i]]
        if (config) options.baseConfig = config
        else throw "ERROR: Config is not valid"
        break

      case "--fix":
        options.fix = true
        break

      default:
        const path = resolvePath(args[i])
        options.include.push(path)
    }
  }

  return options
}

const main = async () => {
  console.log("Linting...")

  const options = getOptions()

  const eslint = new ESLint({
    baseConfig: options.baseConfig,
    fix: options.fix,
    extensions,
  })

  const results = await eslint.lintFiles(options.include)
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter("stylish")
  const resultText = formatter.format(results)

  if (resultText.length > 0) console.log(resultText)
  else console.log("No linter errors found.")
}

main().catch(error => {
  process.exitCode = 1
  console.error(error)
})
