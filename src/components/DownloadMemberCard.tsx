import { Box, Button, Fab, Modal } from "@mui/material"
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { printDocument } from "../_utils/document";
import MemberCard from "./MemberCard";

export default function DownloadMemberCard({ member }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const screenSize = window.innerWidth
    const isMobile = screenSize < 700
    return !isOpen ? <Button
        type="button"
        variant="text"
        onClick={() => setIsOpen(true)}
    >
        Minha carteirinha
    </Button>
        : <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}
        >
            <Box sx={{
                width: isMobile ? 300 : 400,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}
                >
                    <Fab color="default" variant="extended" style={{
                        marginBottom: '16px'
                    }} onClick={() => setIsOpen(false)}>
                        <MdClose />
                    </Fab>
                    <Button 
                        type="button" 
                        variant="contained" 
                        onClick={() => printDocument('member-card', 'nomedousuario')}
                    >Baixar carteirinha</Button>
                </div>
                <MemberCard member={member} />
            </Box>
        </Modal>

}