export interface Feed {
    id: string,
    networkId: string,
    protocol: string,
    address: string,
    name: string,
    title: string,
    description?: string,
    tellorId?: string,
    granularity: number,
    sampleAPI?: string,
    ens?: string
}

export interface FeedOld {
    tellorId?: string,
    networkId: string,
    name: string,
    address: string,
    title: string,
    description?: string,
    granularity: number,
    sampleAPI?: string,
    protocol: string,
    ens?: string,
    value: string,
    hearted: boolean,
    nodeCount: number,
    lastUpdate: string,
    latestRound?: number,
    latestAnswer?: number,
    latestTimestamp?: number,
    responses: [Response],
    answer: string,
    minResponses: number,
    maxResponses: number,
    deviationThreshold: number,
    answerRenderOptions?: AnswerRenderOptions
}

export interface Response {
    transactionHash: string,
    address: string,
    answer: string | number,
    timestamp: number,
    gasPrice: string | number
}

export interface AnswerRenderOptions {
    transform: {
        multiply: number,
        decimals: number
    },
    format: string
}