(function (window) {
  window._env = window._env || {}

  function configuration(type, version) {
    if (type === 'default-local') {
      // Settings for Development "iComply"
      window._env.title = 'iComply';
      window._env.authority = 'https://dev-identity.icomply.no/';
      window._env.clientId = '75a1c462-50ba-4d48-96e2-a3a3b56d2c06';
      window._env.clientRoot = 'http://192.168.123.225:4200/';
      window._env.clientScope = 'openid profile InComplyAPI roles';
      window._env.apiRoot = 'https://dev-identity.icomply.no/';
      window._env.api = 'https://dev-services.icomply.no/api/';
      window._env.returnUrl = 'http://192.168.123.225:4200';
      window._env.identity = 'https://dev-identity.icomply.no/';
      window._env.features = [
        'Administrator',
        'ManageSurvey',
        'ManageProject',
        'ManageLookup',
        'ManageQuestions',
        'ManageSurveyAnswer',
        'ManageAccounts',
        'ManageClients',
        'ManageSFI',
        'ManageReports'
      ];
      window._env.media = 'https://media.icomply.no/dev/';
      window._env.version = version;
      window._env.type = 'development';
    } else if(type === 'default-development') {
      // Settings for Development "iComply"
      window._env.title = 'iComply';
      window._env.authority = 'https://dev-identity.icomply.no/';
      window._env.clientId = '75a1c462-50ba-4d48-96e2-a3a3b56d2c06';
      window._env.clientRoot = 'https://dev-dashboard.icomply.no/';
      window._env.clientScope = 'openid profile InComplyAPI roles';
      window._env.apiRoot = 'https://dev-identity.icomply.no/';
      window._env.api = 'https://dev-services.icomply.no/api/';
      window._env.returnUrl = 'https://dev-dashboard.icomply.no';
      window._env.identity = 'https://dev-identity.icomply.no/';
      window._env.features = [
        'Administrator',
        'ManageSurvey',
        'ManageProject',
        'ManageLookup',
        'ManageQuestions',
        'ManageSurveyAnswer',
        'ManageAccounts',
        'ManageClients',
        'ManageSFI',
        'ManageReports'
      ];
      window._env.media = 'https://media.icomply.no/dev/';
      window._env.version = version;
      window._env.type = 'development';
    }
  }

  configuration('default-development', '4.8.3');
  // Settings for Development "Norled"
  // window._env.authority = 'https://dev-identity.norled.no/';
  // window._env.clientId = '75a1c462-50ba-4d48-96e2-a3a3b56d2c06';
  // window._env.clientRoot = 'http://192.168.123.225:4200/';
  // window._env.clientScope = 'openid profile norledAPI roles';
  // window._env.apiRoot = 'https://dev-identity.norled.no/';
  // window._env.api = 'https://dev-services.norled.no/api/';
  // window._env.returnUrl = 'http://192.168.123.225:4200';
  // window._env.identity = 'https://dev-identity.norled.no/';
  // window._env.features = [
  //   'Administrator',
  //   'ManageSurvey',
  //   'ManageProject',
  //   'ManageLookup',
  //   'ManageQuestions',
  //   'ManageSurveyAnswer',
  //   'ManageAccounts',
  //   'ManageClients',
  //   'ManageSFI',
  //   'ManageReports'
  // ];
  // window._env.media = 'https://media.norled.no/dev/';
  // window._env.type = 'development';

}(this));
