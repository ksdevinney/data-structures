// data
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// graph
// each key is an airport, edges are airports connected to it
const adjacencyList = new Map();

//add node
function addNode(airport) {
    adjacencyList.set(airport, []);
};

// add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

//create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);