function uniques(...resto){
    let s = new Set();
    for(items in resto){
        s.add(resto[items])
    }
    console.log(s);
}

uniques([1,2], 'patata','patata', 34, 34)


