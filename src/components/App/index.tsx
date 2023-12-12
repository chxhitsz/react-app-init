import {FC, useMemo} from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {Tracker, TrackRoute, combineCollects, browser, context, session} from '@ecomfe/react-track';
import {welcomeIndex} from '@/urls/welcome';
import Welcome from '../Welcome';
import {provider} from './tracker';

interface Props {
    username: string;
}

const App: FC<Props> = ({username = 'user'}) => {
    const collect = useMemo(
        () => {
            const appContext = {
                username, // TODO: 想办法拿到登录的用户名
                app: 'react-app', // TODO: 修改应用标识符
                version: $build.version + '@' + $build.time,
                environment: $build.target,
            };

            return combineCollects(
                context(appContext),
                browser(),
                session()
            );
        },
        [username]
    );

    return (
        <Tracker collect={collect} provider={provider}>
            <Switch>
                <TrackRoute path={welcomeIndex.fill()} component={Welcome} />
                <Redirect to={welcomeIndex.fill()} />
            </Switch>
        </Tracker>
    );
};

export default App;
