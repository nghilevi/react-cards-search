

enum Api {
    Users = 'https://jsonplaceholder.typicode.com/users',
    Posts = 'https://jsonplaceholder.typicode.com/posts'
}

enum Status {
    Default = 'default',
    Loading = 'loading',
    Success = 'success',
    Failure = 'failure'
}

enum LoadingStatusText {
    Loading = 'Loading data ...',
    Failure = 'Data loaded failed. Please try again',
    UsersLoadFail = 'Users loaded failed. Please try again'
}

enum CardsContainerText {
    SelectedUserId = 'Selected user id:',
    SelectUser = 'Please select user',
    NoSelection = 'None'
}

enum CardsSearchText {
    Empty = 'There is no items on the list. This may be due to we can not load the data. Please try again later!'
}



export { Api, Status, CardsContainerText, CardsSearchText, LoadingStatusText }