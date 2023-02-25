module.exports = {
  packagerConfig: {
    icon: '/public/icon.png', // no file extension required
  },
  rebuildConfig: {},
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'DeveloperCron',
          name: 'MyIntro',
        },
        prerelease: true,
      },
    },
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
