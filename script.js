function generate(){
    let quotes = {
        "-Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "-Denis Diderot" : '"Man will never be free until the last king is strangled with the entrails of the last priest."',
        "-Michelangelo" : '"I saw the angel in the marble and carved until I set him free."',
        "-Lewis B. Smedes" : '"To forgive is to set a prisoner free and discover that the prisoner was you."'     
    }

    /* Here we are creating an array that consist of the keys from my quotes dictionary */
    let authors = Object.keys(quotes);
    

    /* A number, between zero and one, multiplied by the length of 
    our array, which is in this case 4. The product is then floored, 
    i.e. 3.9 becomes 3. 2.4 becomes 2. 
    
    This generates a value of 0,1,2 or 3. Allowing us to select a random values from our array*/
    let author = authors[Math.floor(Math.random()* authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}