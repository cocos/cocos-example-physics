import { _decorator, Prefab, Node, instantiate, isValid } from "cc";

export class PrefabPoolUtil {

    private static _pool = {};

    /**
     * get a entity with pool name
     * @param poolName the pool name
     * @param time  optional, the time when recover, in seconds
     */
    public static getItemByPoolName (poolName: string, prefab: Prefab, time?: number): Node {

        if (this._pool[poolName] == null) {
            this._pool[poolName] = [];
        }

        const pool = this._pool[poolName];

        let node: Node = null;
        if (pool.length > 0) {
            node = pool.pop();
        } else {
            node = instantiate(prefab);
        }

        if (time != null) {
            // delay recover node with pool name
            setTimeout(() => {
                if (isValid(node)) {
                    node.parent = null;
                    this.recoverItemByPoolName(poolName, node);
                }
            }, time * 1000);
        }

        return node;
    }

    /**
     * recover a entity with pool name
     * @param poolName the pool name
     * @param entity  the node need to recover
     */
    public static recoverItemByPoolName (poolName: string, entity: Node, removeFromParent?: boolean) {

        if (this._pool == null)
            return;

        const pool = this._pool[poolName];
        let index = pool.indexOf(entity);
        if (index == -1) {
            if (removeFromParent) entity.removeFromParent();
            pool.push(entity);
        }
    }

    public static clear (poolName: string) {
        delete this._pool[poolName];
    }
}
