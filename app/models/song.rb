class Song < ActiveRecord::Base
  # searchkick
  belongs_to :user
   # Song.order(rating: :desc);
  ratyrate_rateable "rating"

  def self.search(name)
    if name
      self.where("name iLIKE ?", "%#{name}%")
    # link_to "My database", "/songs"
    else
      self.all
     # "Your collection dosnt have that song! Search our database and add it!"
     #render "sdslfja";
    # redirect_to 
    end
  end
end

# Song
# vs.
# Rdio::Song