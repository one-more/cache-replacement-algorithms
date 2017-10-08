// @flow

import path from 'ramda/src/path'

export default class BT {
    root: ?Node = null;

    push(value: any) {
        const {root} = this;

        if (root) {
            return this.insertLeaf(value);
        }
        return this.createRoot(value);
    }

    createRoot(value: any) {
        this.root = new Node(value);
    };
    
    insertLeaf(value: any) {
        const {root} = this;
        // $FlowIgnore
        return this.insertNode(value, root);
    };

    insertNode(value: any, currentNode: Node) {
        const branch = value < currentNode.value ? 'left' : 'right';
        const branchNode = path([branch], currentNode);
        if (branchNode) {
            return this.insertNode(value, branchNode);
        }
        // $FlowIgnore
        currentNode[branch] = new Node(value);
    }

    static fixedSize(size: number) {
        const rootNode = fixedSizeTree(1, size);
        const tree = new BT;
        tree.root = rootNode;
        return tree
    }
}

class Node {
    constructor(value: any) {
        this.value = value;
    }

    left: ?Node = null;
    right: ?Node = null;
    value: any;
}

function fixedSizeTree(a: number, b: number) {
    if(b < a) {
        return null
    }
    const node = new Node((a + b) / 2);
    node.left = fixedSizeTree(a, (a + b) / 2 - 1);
    node.right = fixedSizeTree((a + b) / 2 + 1, b);
    return node
}