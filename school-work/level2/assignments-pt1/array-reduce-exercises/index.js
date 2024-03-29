//1. Turn an array of numbers into a total of all the numbers
    function total(arr) {
        const result = arr.reduce(function(final, num){
            final += num
            return final
        }, 0)
        return result
    }
    
    // console.log(total([1,2,3])); // 6
    
//2. Turn an array of numbers into a long string of all those numbers.
    function stringConcat(arr) {
        const result = arr.reduce(function(final, num){
            const numString = num.toString()
            final = final + numString
            return final
        }, [])
        return result
    }
    
    // console.log(stringConcat([1,2,3])); // "123"
  
//3. Turn an array of voter objects into a count of how many people voted
    function totalVotes(arr) {
        const voted = arr.reduce(function(final, voter){
            if(voter.voted){
                final++
            }
            return final
        }, 0)
        return voted
    }
    
    var voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
    ];
    // console.log(totalVotes(voters)); // 7

//4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
    function shoppingSpree(arr) {
        const total = arr.reduce(function(final, cost){
            final += cost.price
            return final
        }, 0)
        return total
    }
    
    var wishlist = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ];
    
    // console.log(shoppingSpree(wishlist)); // 227005
    
//5. Given an array of arrays, flatten them into a single array
    function flatten(arr) {
        const single = arr.reduce(function(final, thing){
            final.push(thing)
            return final
        }, [])
        return single
    }
    
    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ];
    
    // console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6. Given an array of potential voters, return an object representing the results of the vote
    //include
        //voters 18-25
        //voters 26-35
        //voters 36-55
        //how many in each range actually voted

        var voters = [
            {name:'Bob' , age: 30, voted: true},
            {name:'Jake' , age: 32, voted: true},
            {name:'Kate' , age: 25, voted: false},
            {name:'Sam' , age: 20, voted: false},
            {name:'Phil' , age: 21, voted: true},
            {name:'Ed' , age:55, voted:true},
            {name:'Tami' , age: 54, voted:true},
            {name: 'Mary', age: 31, voted: false},
            {name: 'Becky', age: 43, voted: false},
            {name: 'Joey', age: 41, voted: true},
            {name: 'Jeff', age: 30, voted: true},
            {name: 'Zack', age: 19, voted: false}
        ];
        
        function voterResults(arr) {
           const voteStats = arr.reduce(function(final, voter){
                if(voter.age <= 25){
                    final.numYoungPeople++
                    if(voter.voted){
                        final.numYoungVotes++
                    }
                } else if(voter.age <= 35 && voter.age > 25){
                    final.numMidsPeople++
                    if(voter.voted){
                        final.numMidsVotes++
                    }
                }else if(voter.age <= 55 && voter.age > 35){
                    final.NumOldPeople++
                    if(voter.voted){
                        final.NumOldVotes++
                    }
                }
                return final
           }, {numYoungPeople: 0, numYoungVotes: 0, numMidsPeople: 0, 
            numMidsVotes: 0, NumOldPeople: 0, NumOldVotes: 0,})

            return voteStats
        }
        
        // console.log(voterResults(voters)); // Returned value shown below:
        /*
        { numYoungVotes: 1,
          numYoungPeople: 4,
          numMidVotesPeople: 3,
          numMidsPeople: 4,
          numOldVotesPeople: 3,
          numOldsPeople: 4
        }
        */
        
 