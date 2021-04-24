function query(query: string, variables: Object) {
    $.ajax({
        method: 'POST',
        url: '/graphql',
        contentType: 'application/json',
        headers: {
            
        },
        data: JSON.stringify({
            query: query,
            variables: variables
        })
    });
}

export default {
    query
};