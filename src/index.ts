function getScriptPath(): object {
  return {
    types: 'type-annotations',
    interfaces: 'first-interface'
  };
}

const appModule = getScriptPath();
require(`./examples/${appModule[process.argv[3]]}`);
