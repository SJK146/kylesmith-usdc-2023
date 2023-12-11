Thought process, the json input is a list of books with a metdata block and then an unknown number of text samples after it. 
The function needs to iterate through the books, and then iterate through the text samples and check if the searchTerm is included in the text. If the sample text is included it adds the relavant metadata from the book to the results object, as well as information about the page and line of the ext sample. 

JS has for each loops that iterate through each item, and included string functions that can check if a string includes a string. Both were used to process the json input and then check its contents. I combined this together and checked the correct JSON labls to pull the needed information and compare it as needed. 

One question I do have is if the search terms should be alone, for example the search term "the" should match "the", but should it match "there" or "blithe". Based on reading the documentation I would say that it should match all the examples, because the user could specify spaces if they want it to skip them, but this would not work for the end of a string. For " The " "The ..." and "... The" would not match and should. However based on the documentation I am just searching for the given terms as is. 

Test cases:
No matches
All matches-match in every sentence 

Match is apart of a substring, not full work
    ex "The" should match "...There"

Multiple books

multiple matches in a single sentence 

Empty input, searchterm and json 
Incorrect json inputs
    different flags 
    Empty tags, ex ISBN
    
Empty searchterm -returns all text 

Really long searchterm 





