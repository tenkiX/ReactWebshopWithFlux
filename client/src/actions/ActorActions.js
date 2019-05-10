import ActorConstants from '../constants/ActorConstants'
import SakilaDispatcher from '../dispatcher/SakilaDispatcher'

class ActorActions {

    showActor(actorId){
        SakilaDispatcher.handleViewAction({
            actionType: ActorConstants.SHOW_ACTOR_DETAILS,
            payload : parseInt(actorId)
        });
    }
}

export default new ActorActions();