// LEETCODE :   707).DESIGN A SINGLY LINKED LIST
const Node = (val)=> {
    this.val =  val;
    this.next = null;
}

//represented from head element
const myLinkedList =()=> {
    this.head = null;
    this.size = 0;
}

const addAtHead = (val)=> {
    let newNode =  new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

const addAtTail= (val)=> {
    let newNode = new Node(val);
    if(this.head  == null) this.head = newNode;

    else {
        let current = this.head;
        while(current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }  this.size++;
    }

const addAtIndex = (index, val) => {
 if(index<0 || index>this.size) return; //if index is greater than size or negative we do nothing
    let newNode  = new Node(val);
    let curr = this.head;  //first node of our linked list
    if(index==0) this.addAtHead(val);

    else if(index==this.size) this.addAtTail(val);
    
    else {
    for(let i=0;i<index-1;i++){
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    }

    this.size++;
}

const getAtIndex = (index)=>{
    if(index<0 || index>=this.size) return -1;
    
    let curr = this.head;
    for(let i=0;i<index;i++){
        curr = curr.next;
    }
    return curr.val;
    // return curr;  if asked the node
}

const deleteAtIndex = (index)=> {
    if(index<0 || index>=this.size) return; //they told to return nothing ;
    if(index==0) {
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for(let i=0;i<index-1;i++){
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }this.size--;
}
