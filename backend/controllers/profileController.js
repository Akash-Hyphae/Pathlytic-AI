import Profile from "../models/Profile.js";

// @desc Save or Update User Profile
// @route POST /api/profile
// @access Private
export const saveProfile = async (req, res) => {
  try {
    const {
      college,
      degree,
      currentYear,
      targetRole,
      targetCompanies,
      timeline,
      dailyHours,
      selectedSkills,
      skillConfidence,
    } = req.body;

    // Check if profile exists for user
    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        {
          college,
          degree,
          currentYear,
          targetRole,
          targetCompanies,
          timeline,
          dailyHours,
          selectedSkills,
          skillConfidence,
        },
        { new: true }
      );
    } else {
      // Create new profile
      profile = await Profile.create({
        user: req.user._id,
        college,
        degree,
        currentYear,
        targetRole,
        targetCompanies,
        timeline,
        dailyHours,
        selectedSkills,
        skillConfidence,
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get Current User Profile
// @route GET /api/profile/me
// @access Private
export const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id }).populate(
      "user",
      "name email"
    );

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};