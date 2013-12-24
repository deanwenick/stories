
Template.createStory.events({

'click #createNewStory': function() {

    Stories.insert(
                {
                photographer: Meteor.user().username,
                editor: Meteor.user().username,
                votes: 0,
                photos: "",
                storyName: ""
                },
                function(err, result) {
                    if(err) {
                        alert(err);
                    } else {
                        return Router.go('/stories/' + result);
                    }
                }
            );
}
});