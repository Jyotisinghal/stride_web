class StrideController < ApplicationController
  def admin
  end

  def home
  	@logos = Logo.all
  end
end
