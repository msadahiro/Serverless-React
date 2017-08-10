export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        BUCKET: 'msadahiro-notes'
    },
    apiGateway: {
        URL: 'https://vwl55w0yg0.execute-api.us-west-2.amazonaws.com/prod',
        REGION: 'us-west-2',
    },
    cognito: {
        USER_POOL_ID: 'us-east-1_VRvTvvS7H',
        APP_CLIENT_ID: '79am9sl7fh17vd8evi848aaebq',
        REGION: 'us-east-1',
        IDENTITY_POOL_ID: 'us-east-1:64752968-1f47-4b03-84d6-9d155dfaad7a',
    }
};