const graph = {
    0: [1, 2, 3],
    1: [4, 5],
    2: [],
    3: [],
    4: [6],
    5: [],
    6: [],
};
function DFS(graph, node, visited = []) {
    if (visited.indexOf(node) === -1) {
        visited.push(node);
        // 첫번재 함수호출에서 visited에 [0]이들어간다
        for (let neighbor of graph[node]) {
            // 각각 0에 있는 1,2,3이 순차적으로 실행됨 visited는 [0]
            // DFS(graph, 0, []);
            // DFS(graph, [1,2,3], [0]);
            // DFS(graph, 1, [0]);
            // DFS(graph, 2, [0,1,4,6,5]);
            // DFS(graph, 3, [0,1,4,6,5,2]);
            DFS(graph, neighbor, visited);
        }
    }
    return visited;
}

/**진행 순서
 * 첫번째 노드 : 0;
 * visited.push(0), current : 1, 2, 3
 * DFS(graph, 1, visited = [0])
 * visited.push(1), current : 4, 5
 * DFS(graph, 4, visited = [0,1])
 * visited.push(4), current : 6
 * DFS(graph, 6, visited = [0,1,4])
 * 방문할 노드 없음
 * return ... -> visited = [0,1,4,6]
 * DFS(DFS(DFS(DFS())))
 * DFS(graph, 5, visited = [0,1,4,6])
 * 방문할 노드 없음
 * return ... visited = [0,1,4,6,5]
 * DFS(graph, 2, visited = [0,1,4,6,5])
 * 방문할 노드 없음
 * return ... visited = [0,1,4,6,5,2]
 * DFS(graph, 3, visited = [0,1,4,6,5,2])
 */

const result = DFS(graph, 0);
console.log(result); //[0, 3, 2, 1, 5, 4, 6]
