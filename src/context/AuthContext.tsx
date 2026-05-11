import type {Session, User} from '@supabase/supabase-js';
import {createContext} from 'react';

export interface AuthContextType {
	session: Session | null;
	user: User | null | undefined;
	signOut: () => Promise<void>;
	loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
