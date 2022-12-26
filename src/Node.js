const Node = (input) => {
    return {
        value: input || null,
        nextNode : null,
        changeValue(value){
            this.value = value
        }
    }
}

export default Node