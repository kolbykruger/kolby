export const State = {
    name: 'State',
    methods: {
        setState(state, elem = false) {
            const pointer = elem ? elem : this.$refs.pointer

            if (pointer) {
                const pcl = pointer.classList

                const result = pcl ? (pcl.contains(state) ? false : true) : false

                if (result) {
                    pcl.add(state)
                }
            }
        },
        removeState(state, elem = false) {
            const pointer = elem ? elem : this.$refs.pointer

            if (pointer) {
                const pcl = pointer.classList
                const result = pcl ? (pcl.contains(state) ? true : false) : false

                if (result) {
                    pcl.remove(state)
                }
            }
        },
        checkState(state, elem = false) {
            const pointer = elem ? elem : this.$refs.pointer

            if (pointer) {
                const pcl = pointer.classList
                const result = pcl ? (pcl.contains(state) ? true : false) : false
                return result
            }
        }
    }
}
