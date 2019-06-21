module.exports = {
  apps: [
    {
      name: 'hrbh-dev',
      script: 'npm',
      args: 'run dev'
    },
    {
      name: 'hrbh-prod',
      script: 'npm',
      args: 'run start'
    }
  ]
}
