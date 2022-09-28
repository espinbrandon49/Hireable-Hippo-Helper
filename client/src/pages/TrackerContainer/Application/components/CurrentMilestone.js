import React from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_MILESTONE, ADD_MILESTONE } from '../../../../utils/mutations';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import ArticleIcon from '@mui/icons-material/Article';
import PhoneIcon from '@mui/icons-material/Phone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const CurrentMilestone = ({ application }) => {

  const [updateMilestone, { error, data }] = useMutation(UPDATE_MILESTONE);
  const [addMilestone, { err, dataA }] = useMutation(ADD_MILESTONE);
  // console.log(error, err, data, dataA)
  console.log(application.currentMilestone)
  // Step Handling
  const steps = ["Applied", "Phone Interview", "Technical Interview", "In Person Interview", "Job Offer", "Accepted"];

  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    setActiveStep(steps.indexOf(application.currentMilestone))
  }, [application])

  const handleNext = async () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const currentMilestone = steps[activeStep + 1];
    const milestones = steps[activeStep + 1];
 
    try {
      await updateMilestone({
        variables: { _id: application._id, currentMilestone: currentMilestone },
      });
      await addMilestone({
        variables: { _id: application._id, milestones: [milestones] },
      });
    } catch (err) {
      console.error(err);
    }  
  };

  const handleBack = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const currentMilestone = steps[activeStep - 1];
    console.log(currentMilestone)
 
    try {
      await updateMilestone({
        variables: { _id: application._id, currentMilestone: currentMilestone },
      });
    } catch (err) {
      console.error(err);
    }  
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Button Colors and Icons
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(15,113,35) 0%,rgb(30,125,150) 50%,rgb(138,35,135) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 136deg, rgb(15,113,35) 0%, rgb(30,125,150) 50%, rgb(138,35,135) 100%)',
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    // console.log(props)
    const icons = {
      1: <ArticleIcon />,
      2: <PhoneIcon />,
      3: <ManageAccountsIcon />,
      4: <PersonIcon />,
      5: <AttachMoneyIcon />,
      6: <ThumbUpIcon />,
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  if (application._id !== undefined) {
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />} sx={{ pt: 2 }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    )
  } else {
    return(
      <></>
    )
  }
 
}

export default CurrentMilestone
