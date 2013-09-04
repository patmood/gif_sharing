class Gif < ActiveRecord::Base

  def self.unique_random(seen_array = [])
    gif = uncached { Gif.order("RANDOM()").first }
    i = 0
    while seen_array.include?(gif.token) && i < 5
      gif = uncached { Gif.order("RANDOM()").first }
      i += 1
    end
    gif
  end

end
