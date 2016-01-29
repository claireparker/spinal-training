describe('Profile View', function() {

    // Create a User model to pass into our view to give it data
    var model = new app.models.User({
        first_name: 'John',
        last_name: 'Black',
        age: 35
    });

    beforeEach(function() {
        this.profile = new app.views.Profile({
            // Pass in a jQuery in memory <div> for testing the view rendering
            el: $('<div>'), 
            
            // Pass in the User model 
            // dependency inversion makes this simple to test, 
            // we are in control of the dependencies rather 
            // than the view setting them up internally.
            model: model
        });
    });

    afterEach(function() {
        this.profile = null;
    });

    it('should exist', function() {
        expect(this.profile).to.be.ok;
    });

    it('render()', function() {
        this.profile.render();

        expect(this.profile.$el.html().match(/John/)).to.be.ok;
        expect(this.profile.$el.html().match(/Black/)).to.be.ok;
        expect(this.profile.$el.html().match(/35/)).to.be.ok;
    });

});