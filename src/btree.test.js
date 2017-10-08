import Btree from './btree'

describe('Btree', () => {
    it('push', () => {
        const bst = new Btree;
        bst.push(3);
        bst.push(2);
        bst.push(4);
        bst.push(1);
        bst.push(5);
        expect(bst.root).toEqual({
            value: 3,
            left: {
                value: 2,
                left: {
                    value: 1,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 4,
                right: {
                    value: 5,
                    left: null,
                    right: null
                },
                left: null
            }
        });
    });

    it('fixed size', () => {
        const bst = Btree.fixedSize(7);
        expect(bst.root).toEqual({
            left: {
                left: {
                    left: null,
                    right: null,
                    value: 1
                },
                right: {
                    left: null,
                    right: null,
                    value: 3
                },
                value: 2
            },
            right: {
                left: {
                    left: null,
                    right: null,
                    value: 5
                },
                right: {
                    left: null,
                    right: null,
                    value: 7
                },
                value: 6
            },
            value: 4
        });
    })
});
