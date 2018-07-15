`exports.inviteUser = function(req, res) {
   var invitationBody = req.body;
   var shopId = req.params.shopId;
   var authUrl = "https://url.to.auth.system.com/invitation";

   superagent
   .post(authUrl)
   .send(invitationBody)
   .end(function(err, invitationResponse) {
     if (invitationResponse.status === 201) {
      User.findOneAndUpdate({
        authId: invitationResponse.body.authId
      }, {
        authId: invitationResponse.body.authId,
        email: invitationBody.email
      }, {
        upsert: true,
        new: true
      }, function(err, createdUser) {
        Shop.findById(shopId).exec(function(err, shop) {
          if (err || !shop) {
            return res.status(500).send(err || { message: 'No shop found' });
          }
          if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
            shop.invitations.push(invitationResponse.body.invitationId);
          }
          if (shop.users.indexOf(createdUser._id) === -1) {
            shop.users.push(createdUser);
          }
          shop.save();
        });
      });
    } else if (invitationResponse.status === 200) {
     res.status(400).json({
      error: true,
      message: 'User already invited to this shop'
     });
      return;
     }
     res.json(invitationResponse);
   });
  };`

  # Code Analysis

  The main issue with this code is that it is written procedurally in one big function which makes it complicated, hard to read and very difficult to change.

  The first thing I would do were I to refactor it would be to make it object-orientated which would improve readability, cut down on complexity, make it easier to test and easier to change.

  The object orientated approach would also increase code re-use as you would be able to use the same function in different places. It would also allow you to test smaller chunks of code at a time.

  The nested if statements are messy and are best avoided. I would also put the error messages first rather than last to minimise unhandled exceptions.
