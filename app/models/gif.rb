class Gif < ActiveRecord::Base

  def self.unique_random(seen_array = [])
    gif = uncached { Gif.order("RANDOM()").first }
    i = 0
    while seen_array.include?(gif.token) && i < 10
      gif = uncached { Gif.order("RANDOM()").first }
      i += 1
    end
    gif
  end

  def self.vote(token, vote)
    image = Gif.find_by_token(token)
    if vote == "up"
      image.upvotes += 1
    elsif vote == "down"
      image.downvotes += 1
    end
    image.score = image.upvotes - image.downvotes
    image.save
  end

end
