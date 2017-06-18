module UsersHelper
  def job_title_icon
    if @user.profile.job_title == "Software Developer/Engineer"
      "<i class='fa fa-code'></i>".html_safe
    elsif @user.profile.job_title == "Entrepreneur"
      "<i class='fa fa-lightbulb-o'>".html_safe
    elsif @user.profile.job_title == "Investor"
      "<i class='fa fa-dollar'>".html_safe
    end
  end
end