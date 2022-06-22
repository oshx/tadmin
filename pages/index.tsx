import type { NextPage } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { Box, Container } from '@mui/material';

const Home: NextPage = () => {
  return (
    <PageLayout title="요약">
      <Container>
        <Box>본문</Box>
      </Container>
    </PageLayout>
  );
};

export default Home;
