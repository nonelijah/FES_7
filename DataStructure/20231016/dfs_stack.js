/**DFS
 * 1.시작 노드 방문
 * 1-1. 시작 노드를 스텍에 넣고
 * 1-2. 스텍에서 pop()
 * 1-3. 시작 노드를 방문하게 됨
 * 1-4. pop한 값이 current가 됨
 * 2.시작 노드의 인접노드를 스텍에 넣는다.
 * 3. 스택에서 pop()
 * 4. pop한 값이 current가 됨
 * 4-1. current가 방문한 적 있는지 확인한다.
 * 5. current를 방문 목록에 넣는다.
 * 6. current의 인접 노드를 stack에 push
 * 7. stack이 비어있을 때까지 반복 => 모든 노드에 방문할 때까지 반복
 */

function DFS(graph, start) {
    const visited = [];
    let stack = [start];

    while (stack.length !== 0) {
        const current = stack.pop();
        // 현재 노드가 방문한 목록에 없으면
        if (visited.indexOf(current) === -1) {
            visited.push(current);

            // 방문한 적 없는 노드들만 필터
            const neighbors = graph[current].filter(
                (n) => visited.indexOf(n) === -1
            );
            stack.concat(neighbors);
        }
    }

    return visited;
}

const graph = {
    0: [1, 2, 3],
    1: [4, 5],
    2: [],
    3: [7, 8],
    4: [6],
    5: [],
    6: [],
    7: [],
    8: [],
};
const result = DFS(graph, 0);
console.log(result); //[0, 1, 4, 6, 5, 2, 3]
