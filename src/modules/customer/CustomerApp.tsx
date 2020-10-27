import React, { useCallback } from 'react';
import { Button, Flex, Heading, IconButton, Text } from 'theme-ui';
import { Table } from '@tabetalt/kit';
import { MdRefresh } from 'react-icons/md';
import Loading from '../../components/Loading';
import { useGetCustomersQuery } from '../../generated/graphql';

const CustomerApp = () => {
  const {
    data,
    loading,
    refetch: _refetch,
  } = useGetCustomersQuery({
    notifyOnNetworkStatusChange: true,
  });
  const refetch = useCallback(() => {
    setTimeout(() => _refetch(), 0);
  }, [_refetch]);

  if (loading) return <Loading />;

  return (
    <div>
      <Flex sx={{ alignItems: 'center', mb: 4}}>
        <Heading sx={{mb: 0}}>Kunder</Heading>
        <Button variant="outline" sx={{height: '40px', ml: 3}}>Opprett ny kunde</Button>
      </Flex>

      <Flex sx={{ mb: 4 }}>
        <Text sx={{ flexGrow: 1 }}>
          Nedenfor finner du en liste over kunder av AYR. Listen hentes fra en
          egen database for dette verktøyet.
        </Text>
        <IconButton sx={{ ml: 4 }} onClick={() => refetch()}>
          <MdRefresh size="24" />
        </IconButton>
      </Flex>
      <Table
        columns={[
          {
            Header: 'Navn',
            accessor: 'name',
          },
        ]}
        data={data?.customers}
      />
    </div>
  );
};

export default CustomerApp;
