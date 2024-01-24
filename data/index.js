
export const postData = [
    { id: 1, desc: "My first post 1", img:  'https://plus.unsplash.com/premium_photo-1692455906215-dff2237582d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, desc: "My first post 2", img: 'https://images.unsplash.com/photo-1523032217284-d9e49d6c5f04?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', },
    { id: 3, desc: "My first post 3", img:  'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, desc: "My first post 4", img:  'https://images.unsplash.com/photo-1533536201350-93ebe24101f5?q=80&w=1366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, desc: "My first post 5", img:  'https://images.unsplash.com/photo-1530510004231-720218d936da?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, desc: "My first post 6", img:  'https://images.unsplash.com/photo-1609813744174-a0df83d477fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

]

export const getPostById = (id) => {
    return postData.find(post => post.id == id)
}

// const postData=[
//      'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//      'https://images.unsplash.com/photo-1704439735567-11af78b213e3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//      'https://images.unsplash.com/photo-1678801868960-a0ab87e23f02?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//      'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//  ]