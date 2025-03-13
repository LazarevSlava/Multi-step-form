import { useContext } from 'react';
import { FormContext } from '../../contextData/FormContext';

export const useFormContext = () => useContext(FormContext);
