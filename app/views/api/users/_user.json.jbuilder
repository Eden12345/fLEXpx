user = @user if @user

json.currentUser do
  json.extract! user, :id, :username
end
