module.exports = function AppMain(){
    /**
     * Requirements
     *  -- Deploys to Cloud
     *  -- Setups Robot Software
     *  -- Runs when in allowed environments
     *  -- app knows what code to run in proper environments
     */

    ////////////////////////////////
    //   App Memory             ////
    ////////////////////////////////
    const _APPMEM_ = {
    /*package.json*/    pkgJSON:    require("./package.json"),
    /*loaded packages*/ _M_:        {},
    /** DB Connections*/_DB_:       {},
    /** Gnrl Memory */  _MEM_:      {},
    }
    ////////////////////////////////
    //   Load Modules           ////
    ////////////////////////////////
    require("./loadmodules.js")(pkgJSON, _APPMEM_._M_);


    ////////////////////////////////
    // Env Cfg                  ////
    ////////////////////////////////


    // Environments     // software package
        // robot            // 
        // server
        // browser          //  data:text/html,<script>alert('hi');</script>


    // when environment identified
        // fetch files locally or from github
        // 

    ////////////////////////////////
    //  DB Connections          ////
    ////////////////////////////////


    ////////////////////////////////
    //   Router                 ////
    ////////////////////////////////
    _M_["TPRouter"](
        _M_["TPProtocol"]
    );

    ////////////////////////////////
    //   MainPurposeCode        ////
    ////////////////////////////////

}