import React from "react";
import dagre from "dagre";
import "./App.css";

function App() {
  // Create a new directed graph
  var g = new dagre.graphlib.Graph({ compound: true });

  // Set an object for the graph label
  g.setGraph({});

  // Default to assigning a new object as a label for each new edge.
  g.setDefaultEdgeLabel(function () {
    return {};
  });

  // Here we're setting the nodes
  g.setNode("a", { label: "A" });
  g.setNode("b", { label: "B" });
  g.setNode("c", { label: "C" });
  g.setNode("d", { label: "D" });
  g.setNode("e", { label: "E" });
  g.setNode("f", { label: "F" });
  g.setNode("g", { label: "G" });
  g.setNode("TagA", {
    label: "Tag A",
  });
  g.setNode("TagB", {
    label: "Tag B",
  });

  // Set the parents to define which nodes belong to which cluster
  g.setParent("a", "TagA");
  g.setParent("g", "TagA");
  g.setParent("b", "TagB");
  g.setParent("c", "TagB");
  g.setParent("d", "TagB");
  g.setParent("e", "TagB");
  g.setParent("f", "TagB");

  // Set up edges, no special attributes.
  g.setEdge("a", "b");
  g.setEdge("b", "c");
  g.setEdge("b", "d");
  g.setEdge("b", "e");
  g.setEdge("b", "f");
  g.setEdge("a", "g");
  g.setEdge("b", "g");
  dagre.layout(g);
  console.log(g);

  return (
    <div>
      {g.nodes().map((n) => {
        const nodeN = g.node(n);
        return (
          <div className="nodeEl" style={{ left: nodeN.x, top: nodeN.y }}>
            {nodeN.label}
          </div>
        );
      })}
    </div>
  );
}

export default App;
