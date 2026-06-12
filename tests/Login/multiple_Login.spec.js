import { test} from '../../fixtures/customFixture.js';


test('Login', async ({signin}) => {
    test.slow();
        await signin.multiplelogintest();    
});

