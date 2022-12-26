import { Node } from "./Node";

const LinkedList = () => {
    let head = null
    let tail =null
    let length = 0

    const append = (value) => {
        let node = Node(value)
        length++
        if(head === null){
            head = tail = node
        }else{
            let temp = head
            while(temp.nextNode){
                temp=head.nextNode
            }
            temp.nextNode = node
            tail = node

        }
    }

    const prepend = (value) => {
        let node = Node(value)
        length++
        if(head === null){
            head = tail = node
        }else{
            node.nextNode = head
            head = node
        }
    }

    const size = () => {
        return length
    }

    const getHead = () => {
        return head!==null ? head.value : null
    }

    const getTail = () => {
        return tail!==null ? tail.value : null
    }

    const at = (index) => {
        if(index === 0){
            return head
        }else if( index === length-1){
            return tail
        }else if(index >= length){
            return 'index out of boundary'
        }else{
            let temp = head
            for(let i=0; i<index; i++){
                temp=temp.nextNode
            }
            return temp
        }
    }

    const pop = () => {
        let temp = at(length-2)
        temp.nextNode = null
        tail=temp
        length--
        return at(length-1)
    }

    const contains = (value) => {
        let temp = head.nextNode
        if(head.value === value){
            return true
        } else if(tail.value === value){
            return true
        } else {
            while(temp.nextNode){
                if(temp.value === value){
                    return true
                }
                temp=temp.nextNode
            }
        }
        return false
    }

    const find = (value) => {
        let index 
        let temp = head.nextNode
        if(contains(value)){
            if(head.value === value){
                index = 0 
            }else if(tail.value === value){
                   index = length-1
            } else{
                for(let i=1; i<length; i++){
                    if(temp.value === value){
                        return i
                    }
                    temp = temp.nextNode
                }
            }
            return index
        }
        return null
    }

    const toString = () => {
        let temp = head
        let result = ''
        if(head===null){const LinkedList = () => {
            let head = null
            let tail =null
            let length = 0
        
            const append = (value) => {
                let node = Node(value)
                length++
                if(head === null){
                    head = tail = node
                }else{
                    let temp = head
                    while(temp.nextNode){
                        temp=head.nextNode
                    }
                    temp.nextNode = node
                    tail = node
        
                }
            }
        
            const prepend = (value) => {
                let node = Node(value)
                length++
                if(head === null){
                    head = tail = node
                }else{
                    node.nextNode = head
                    head = node
                }
            }
        
            const size = () => {
                return length
            }
        
            const getHead = () => {
                return head!==null ? head.value : null
            }
        
            const getTail = () => {
                return tail!==null ? tail.value : null
            }
        
            const at = (index) => {
                if(index === 0){
                    return head
                }else if( index === length-1){
                    return tail
                }else if(index >= length){
                    return 'index out of boundary'
                }else{
                    let temp = head
                    for(let i=0; i<index; i++){
                        temp=temp.nextNode
                    }
                    return temp
                }
            }
        
            const pop = () => {
                let temp = at(length-2)
                temp.nextNode = null
                tail=temp
                length--
                return at(length-1)
            }
        
            const contains = (value) => {
                let temp = head.nextNode
                if(head.value === value){
                    return true
                } else if(tail.value === value){
                    return true
                } else {
                    while(temp.nextNode){
                        if(temp.value === value){
                            return true
                        }
                        temp=temp.nextNode
                    }
                }
                return false
            }
        
            const find = (value) => {
                let index 
                let temp = head.nextNode
                if(contains(value)){
                    if(head.value === value){
                        index = 0 
                    }else if(tail.value === value){
                           index = length-1
                    } else{
                        for(let i=1; i<length; i++){
                            if(temp.value === value){
                                return i
                            }
                            temp = temp.nextNode
                        }
                    }
                    return index
                }
                return null
            }
        
            const toString = () => {
                let temp = head
                let result = ''
                if(head===null){
                    result = 'empty list'
                }else if(head.nextNode === null){
                    result = head.value
                }else{
                    while(temp.nextNode){
                        result += " " + temp.value
                        temp = temp.nextNode
                    }
                    result += " " + temp.value
                }
                return result
            }
        
            return{
                append,
                prepend,
                toString,
                size,
                getHead,
                getTail,
                at,
                pop,
                contains,
                find
            }
        }
            result = 'empty list'
        }else if(head.nextNode === null){
            result = head.value
        }else{
            while(temp.nextNode){
                result += " " + temp.value
                temp = temp.nextNode
            }
            result += " " + temp.value
        }
        return result
    }

    return{
        append,
        prepend,
        toString,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find
    }
}