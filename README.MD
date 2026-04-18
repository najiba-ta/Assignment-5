Answer 1:

JavaScript এ var,let,আর const variable declare করার জন্য use করা হয়, কিন্তু এদের scope আর behavior আলাদা।
var পুরানো JavaScript এ বেশি ব্যবহার হতো। এটা function scoped এবং একই variable redeclare ও reassign দুটোই করা যায়। এজন্য অনেক সময় code এ problem create করতে পারে।
let ES6 এ introduce হয়েছে। এটা block scoped, মানে { } এর ভিতরে declare করলে ওই block এর বাইরে কাজ করবে না। let এর value change করা যায়, কিন্তু একই scope এ আবার declare করা যায় না।
const ও block scoped কিন্তু এর value declare করার পর change করা যায় না। তাই যেসব variable এর value change হবে না সেগুলোর জন্য const ব্যবহার করা ভালো।


Answer 2:

Spread operator (...) ব্যবহার করা হয় array বা object এর elements expand বা copy করার জন্য। এটা code কে ছোট এবং readable করে।
suppose একটা array আছে [1,2,3], যদি আমরা ...numbers লিখি তাহলে array এর সব element আলাদা আলাদা হয়ে spread হয়ে যায়। এটা দিয়ে সহজে array copy করা, combine করা বা নতুন element add করা যায়।


Answer 3:

এই তিনটা method array এর সাথে কাজ করার জন্য ব্যবহার করা হয়, কিন্তু তাদের কাজ আলাদা।
map() ব্যবহার করা হয় যখন আমরা array এর প্রতিটা element এর উপর কিছু change করে একটা নতুন array তৈরি করতে চাই।
filter() ব্যবহার করা হয় যখন আমরা condition অনুযায়ী কিছু element select করতে চাই। এটা condition match করা element নিয়ে নতুন array return করে।
forEach() array এর প্রতিটা element এর উপর loop চালায়, কিন্তু এটা কোনো নতুন array return করে না। সাধারণত কোনো action perform করার জন্য ব্যবহার করা হয়, যেমন console log করা।

Answer 4:

Arrow function হলো JavaScript এ function লেখার একটা short and modern syntax। এটা ES6 এ introduce হয়েছে।
Normal function এর তুলনায় arrow function লিখতে কম code লাগে এবং code দেখতে cleaner লাগে। বিশেষ করে array method যেমন map(), filter() বা forEach() এর সাথে arrow function বেশি ব্যবহার করা হয়।


Answer 5:

Template literals JavaScript এ string লেখার একটা modern way। এখানে backtick ( ) ব্যবহার করা হয়।
এর সবচেয়ে বড় সুবিধা হলো আমরা string এর ভিতরে variable easily insert করতে পারি ${} ব্যবহার করে।
এটা ব্যবহার করলে string handle করা অনেক সহজ হয় এবং multi-line string লিখাও সহজ হয়ে যায়, তাই code বেশি readable হয়।