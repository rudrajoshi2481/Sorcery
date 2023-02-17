export type DockingProject = {
    title:String,
    description:string,
    createdAt:number,
    createdBy:string                        //uuid
    share:[],
    searchhistory:[],
    uploadedligands:[],
    uploadedproteins:[],

}

export type LigandDoc = {
    nameLigand:string,
    createdAt:number,
    filelink:string,
    activityStatus:[]           //in json with dates date,msg 
    dockedActivitys:[]                // all docking result with this ligands
}

export type ProteinDoc = {
    nameProtein:string,
    createdAt:number,
    filelink:string,
    activityStatus:[]           //in json with dates date,msg 
}

export type dockedActivitys = {
    
}




