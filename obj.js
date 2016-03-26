var facebookPosts=[

  {
	name:"karthika",
	date: "26/3/16",
	content: "my first facebook post",
	comment:[{
		userWhoCommented: "seema",
		dateOfComment: "27/3/16",		
		commentContent: "I like this post"
	},
	{
		userWhoCommented: "Lakshmi",
		dateOfComment: "2/5/16",		
		commentContent: "Awesome"
	}]
  },
  {
	name:"anu",
	date: "25/5/16",
	content: "U c things n u ask y, n i dream things dt never wer, n i ask y not!?",
	comment:{
		userWhoCommented: "Lakshmi",
		dateOfComment: "26/5/16",		
		commentContent: "I like this post"
	}
  }

];

console.log(facebookPosts[0].comment[1].dateOfComment);