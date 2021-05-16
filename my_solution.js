class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function countTarget(root, target) {
    if(!root) return 0
    
    const count = countTarget(root.left, target) + countTarget(root.right, target)
    if(root.value === target){
        return 1 + count    
    }
    return count
}

// test
const t1 = new TreeNode(5, 
                        new TreeNode(2,
                                    new TreeNode(2),
                                    new TreeNode(4)),
                        new TreeNode(7,
                                    new TreeNode(6),
                                    new TreeNode(8)))
const t2 = new TreeNode(2, new TreeNode(1))
const t3 = new TreeNode(3)
console.log(countTarget(t1, 2), 'expect 2')
console.log(countTarget(t2, 1), 'expect 2')
console.log(countTarget(t3, 5), 'expect 0')
console.log(countTarget(null), 'expect 0')
