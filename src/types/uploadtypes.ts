// import fetch from 'node-fetch';

// // Function to approve a request
// async function approveRequest(privateKey: string, requestID: number): Promise<Response> {
//   return fetch('/api/HospitalDashBoard/ApproveRequest', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ privateKey, requestID }),
//   });
// }

// // Function to reject a request
// async function rejectRequest(privateKey: string, requestID: number): Promise<Response> {
//   return fetch('/api/HospitalDashBoard/RejectRequest', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ privateKey, requestID }),
//   });
// }

// // Unit tests
// describe('HospitalDashBoard API', () => {
//   it('send a PATCH request to approve a request', async () => {
//     const mockFetch = jest.fn().mockResolvedValue({
//       status: 200,
//       json: () => Promise.resolve({ success: true }),
//     });
//     (global as any).fetch = mockFetch;

//     const privateKey = 'somePrivateKey';
//     const requestID = 123;

//     await approveRequest(privateKey, requestID);

//     expect(mockFetch).toHaveBeenCalledWith('/api/HospitalDashBoard/ApproveRequest', expect.objectContaining({
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ privateKey, requestID }),
//     }));
//   });

//   it('a PATCH request to reject a request', async () => {
//     const mockFetch = jest.fn().mockResolvedValue({
//       status: 200,
//       json: () => Promise.resolve({ success: true }),
//     });
//     (global as any).fetch = mockFetch;

//     const privateKey = 'somePrivateKey';
//     const requestID = 456;

//     await rejectRequest(privateKey, requestID);

//     expect(mockFetch).toHaveBeenCalledWith('/api/HospitalDashBoard/RejectRequest', expect.objectContaining({
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ privateKey, requestID }),
//     }));
//   });
// });
