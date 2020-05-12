
import { SubscriptionClient } from 'subscriptions-transport-ws';
import ApolloClient from 'apollo-client';
import { split, ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

let client;
if (process.env.REACT_APP_GRAPHQL_API) {
    /*
    const wsClient = new SubscriptionClient(
        process.env.REACT_APP_GRAPHQL_WSS_URI as string,
        { reconnect: true },
    )
    */

    // Create an http link:
    const httpLink = new HttpLink({
        uri: process.env.REACT_APP_GRAPHQL_HTTP_URI
    });

    /*
    //For Websocket Connections (DISABLED for now)
    const wsLink = new WebSocketLink(wsClient);
    const hasSubscriptionOperation = ({ query }: any) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    }

    const link = split(
        hasSubscriptionOperation,
        wsLink,
        httpLink,
    );

    */

    client = new ApolloClient({
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.forEach(({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                        ),
                    );
                if (networkError) console.log(`[Network error]: ${networkError}`);
            }), httpLink]),
        cache: new InMemoryCache()
    });

}

export default client;