import { renderHook } from "@testing-library/react-hooks";
import { useData } from "./useData";

describe('useData', () => {
    
    describe('on fetch data success', () => {
    
        it('should populate Users, Posts and loadingStatus to Success', async () => {
          const { result, waitForNextUpdate } = renderHook(() => useData());
          await waitForNextUpdate();
          // do some assertions here
        })

    })
    
      describe('on fetch data failure', () => {
    
        it('should populate Users, Posts and loadingStatus to Failure', async () => {
          const { result, waitForNextUpdate } = renderHook(() => useData());
          await waitForNextUpdate();
          // do some assertions here
        })

    })

})
